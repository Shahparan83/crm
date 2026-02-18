import { useForm } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface Ticket {
    id: number
    name: string
    contact_number: string
    email: string
    problem: string
    status: string
}

export default function Edit({ ticket }: { ticket: Ticket }) {
    const { data, setData, put, processing, errors } = useForm({
        name: ticket.name || '',
        contact_number: ticket.contact_number || '',
        email: ticket.email || '',
        problem: ticket.problem || '',
        status: ticket.status || 'Open',
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        put(`/tickets/${ticket.id}`)
    }

    return (
        <AppLayout>
            <div className="max-w-xl mx-auto p-6">
                <h1 className="text-xl font-bold mb-4">Edit Ticket</h1>

                <form onSubmit={submit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <Label>Name</Label>
                        <Input
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm">{errors.name}</div>
                        )}
                    </div>

                    {/* Contact Number */}
                    <div>
                        <Label>Contact Number</Label>
                        <Input
                            value={data.contact_number}
                            onChange={e => setData('contact_number', e.target.value)}
                        />
                        {errors.contact_number && (
                            <div className="text-red-500 text-sm">
                                {errors.contact_number}
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm">{errors.email}</div>
                        )}
                    </div>

                    {/* Problem */}
                    <div>
                        <Label>Problem</Label>
                        <textarea
                            className="w-full border p-2 rounded"
                            value={data.problem}
                            onChange={e => setData('problem', e.target.value)}
                        />
                        {errors.problem && (
                            <div className="text-red-500 text-sm">{errors.problem}</div>
                        )}
                    </div>

                    {/* Status Dropdown */}
                    <div>
                        <Label>Status</Label>
                        <select
                            className="w-full border p-2 rounded"
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>

                    <Button disabled={processing}>
                        Update Ticket
                    </Button>
                </form>
            </div>
        </AppLayout>
    )
}
