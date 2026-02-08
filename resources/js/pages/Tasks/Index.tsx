import { Link, router } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
} from '@/components/ui/table';
interface task {
    id: number;
    name: string;
    work_description: string;
    work_distributor: string;
    assign_tasks: string;
    assign_date: string;
    submission_date: string;
}
interface Props {
    tasks: task[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: '/tasks',
    },
];

export default function Index({ tasks }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="w-10/12 mx-auto py-6">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/tasks/create">
                        <Button>Add New Task</Button>
                    </Link>
                </div>

                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Distributor</TableHead>
                            <TableHead>Assign Tasks</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell>{task.work_description}</TableCell>
                                <TableCell>{task.work_distributor}</TableCell>
                                <TableCell>{task.assign_tasks}</TableCell>
                                <TableCell>
                                    <Link href={`/tasks/${task.id}/edit`}>
                                        <Button variant="link">Edit</Button>
                                    </Link>
                                    {/* delete */}
                                    <Button
                                        variant="link"
                                        className="text-red-500"
                                        onClick={() => {
                                            if (confirm('Are you sure you want to delete this task?')) {
                                                router.delete(`/tasks/${task.id}`);
                                            }
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
