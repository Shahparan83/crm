import { useForm } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { BreadcrumbItem } from '@/types/navigation'
import { router } from '@inertiajs/react'


export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        contact_number: '',
        email: '',
        problem: '',
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/tickets')
    }

    return (
        <AppLayout>
            <div className="max-w-xl mx-auto p-6">
                <h1 className="text-xl font-bold mb-4">Create Ticket</h1>

                <form onSubmit={submit} className="space-y-4">

                    <div>
                        <Label>Name</Label>
                        <Input
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                    </div>

                    <div>
                        <Label>Contact Number</Label>
                        <Input
                            value={data.contact_number}
                            onChange={e => setData('contact_number', e.target.value)}
                        />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                    </div>

                    <div>
                        <Label>Problem</Label>
                        <textarea
                            className="w-full border p-2 rounded"
                            value={data.problem}
                            onChange={e => setData('problem', e.target.value)}
                        />
                    </div>

                    <Button disabled={processing}>
                        Submit
                    </Button>
                </form>
            </div>
        </AppLayout>
    )
}
