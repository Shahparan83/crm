import { useForm } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'

interface Reply {
    id: number
    message: string
    created_at: string
}

interface Ticket {
    id: number
    name: string
    email: string
    problem: string
    replies: Reply[]
}

export default function Show({ ticket }: { ticket: Ticket }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()

        post(`/tickets/${ticket.id}/reply`, {
            onSuccess: () => reset('message'),
        })
    }

    return (
        <AppLayout>
            <div className="max-w-2xl mx-auto p-6">

                <h1 className="text-xl font-bold mb-4">Ticket Details</h1>

                {/* Ticket Info */}
                <div className="mb-6 border p-4 rounded space-y-2">
                    <p><strong>Name:</strong> {ticket.name}</p>
                    <p><strong>Email:</strong> {ticket.email}</p>
                    <p><strong>Problem:</strong></p>
                    <div className="bg-gray-100 p-3 rounded">
                        {ticket.problem}
                    </div>
                </div>

                {/* Replies Section */}
                <h2 className="text-lg font-semibold mb-2">Replies</h2>

                <div className="space-y-3 mb-6">
                    {ticket.replies.length === 0 && (
                        <p className="text-gray-500">No replies yet.</p>
                    )}

                    {ticket.replies.map(reply => (
                        <div key={reply.id} className="border p-3 rounded bg-white shadow-sm">
                            <p>{reply.message}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(reply.created_at).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Reply Form */}
                <form onSubmit={submit} className="space-y-3">
                    <textarea
                        className="w-full border p-3 rounded"
                        placeholder="Write your reply..."
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                    />

                    {errors.message && (
                        <div className="text-red-500 text-sm">
                            {errors.message}
                        </div>
                    )}

                    <Button disabled={processing}>
                        Send Reply
                    </Button>
                </form>

            </div>
        </AppLayout>
    )
}
