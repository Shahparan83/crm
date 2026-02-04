import { Link } from '@inertiajs/react';
import { Client } from '@/types/client';
import clientRoutes from '@/routes/clients';

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

interface Props {
  clients: Client[];
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Clients',
    href: '/clients',
  },
];

export default function Index({ clients }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="w-10/12 mx-auto py-6">
        <div className="flex justify-between items-center mb-4">
          <Link href="/clients/create">
            <Button>Add New Client</Button>
          </Link>
        </div>

        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone ?? '—'}</TableCell>
                <TableCell>
                  <Link href={clientRoutes.edit.url(client.id)}>
                    <Button variant="link">Edit</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  );
}
