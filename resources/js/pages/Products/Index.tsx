import { Link, router } from '@inertiajs/react';

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
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}
interface Props {
    products: Product[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

export default function Index({ products }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="w-10/12 mx-auto py-6">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/products/create">
                        <Button>Add New Product</Button>
                    </Link>
                </div>

                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>
                                    <Link href={`/products/${product.id}/edit`}>
                                        <Button variant="link">Edit</Button>
                                    </Link>
                                    {/* delete */}
                                    <Button
                                        variant="link"
                                        className="text-red-500"
                                        onClick={() => {
                                            if (confirm('Are you sure you want to delete this product?')) {
                                                router.delete(`/products/${product.id}`);
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
