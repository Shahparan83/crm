import { Head, Link, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

import { Button } from '@/components/ui/button';
import { destroy } from '@/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticationController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

export default function Users({ users }: { users: any[] }) {
    const { delete: destroy, processing } = useForm();
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="p-4">
                <Button><Link href='users/create'>Create User</Link></Button>

                <ul className="mt-4 space-y-2">
                    {users.map((user) => (
                        <li key={user.id} className="border-b pb-2">
                            {user.id} - {user.name} {user.email}
                            <Button variant="link" className="ml-4">
                                <Link href={`/users/${user.id}/edit`}>Edit</Link>
                            </Button>
                            {/* delete with delete route */}
                            <Button
                                variant="link"
                                className="ml-2 text-destructive"
                                disabled={processing}
                                onClick={() => {
                                    if (confirm('Are you sure you want to delete this user?')) {
                                        destroy(`/users/${user.id}`);
                                    }
                                }}
                            >
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </AppLayout>
    );
}
