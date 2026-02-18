import { Link, router } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'

interface Ticket {
    id: number
    name: string
    contact_number: string
    email: string
    status: string
}

export default function Index({ tickets }: { tickets: Ticket[] }) {

    const deleteTicket = (id: number) => {
        if (confirm('Are you sure you want to delete this ticket?')) {
            router.delete(`/tickets/${id}`)
        }
    }

    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Tickets</h1>

                <Link href="/tickets/create">
                    <Button className="mb-4">Create Ticket</Button>
                </Link>

                <table className="w-full border">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map(ticket => (
                            <tr key={ticket.id}>
                                <td>{ticket.name}</td>
                                <td>{ticket.contact_number}</td>
                                <td>{ticket.email}</td>
                                <td>{ticket.status}</td>
                                <td className="space-x-2">
                                    {/* use router for delete */}
                                    {/* tickets/{id}/edit */}
                                    <Link href={`/tickets/${ticket.id}/edit`}>
                                        <Button variant="link">Edit</Button>
                                    </Link>
                                    <Button variant="destructive" onClick={() => deleteTicket(ticket.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}