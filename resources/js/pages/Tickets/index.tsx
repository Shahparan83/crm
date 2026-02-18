import { Link, router } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { Trash2, Edit, Eye, Plus } from 'lucide-react'

interface Ticket {
    id: number
    name: string
    contact_number: string
    email: string
    status: string
}

const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'open':
            return 'bg-blue-100 text-blue-800'
        case 'in progress':
            return 'bg-yellow-100 text-yellow-800'
        case 'closed':
            return 'bg-green-100 text-green-800'
        default:
            return 'bg-gray-100 text-gray-800'
    }
}

export default function Index({ tickets }: { tickets: Ticket[] }) {

    const deleteTicket = (id: number) => {
        if (confirm('Are you sure you want to delete this ticket?')) {
            router.delete(`/tickets/${id}`)
        }
    }

    return (
        <AppLayout>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Tickets</h1>
                                <p className="text-gray-500 mt-2">Manage and track all support tickets</p>
                            </div>
                            <Link href="/tickets/create">
                                <Button className="gap-2">
                                    <Plus size={18} />
                                    Create Ticket
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {tickets.length === 0 ? (
                        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                            <h3 className="text-lg font-medium text-gray-900">No tickets yet</h3>
                            <p className="text-gray-500 mt-2 mb-4">Get started by creating your first ticket</p>
                            <Link href="/tickets/create">
                                <Button>
                                    <Plus size={18} className="mr-2" />
                                    Create Ticket
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {tickets.map(ticket => (
                                        <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-medium text-gray-900">{ticket.name}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-gray-600">{ticket.contact_number}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-gray-600">{ticket.email}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(ticket.status)}`}>
                                                    {ticket.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <Link href={`/tickets/${ticket.id}`}>
                                                        <Button size="sm" variant="outline" className="gap-1">
                                                            <Eye size={16} />
                                                            View
                                                        </Button>
                                                    </Link>
                                                    <Link href={`/tickets/${ticket.id}/edit`}>
                                                        <Button size="sm" variant="outline" className="gap-1">
                                                            <Edit size={16} />
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                                                        onClick={() => deleteTicket(ticket.id)}
                                                    >
                                                        <Trash2 size={16} />
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}
