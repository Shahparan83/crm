import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import * as React from 'react';
import { BreadcrumbItem } from '@/types/navigation';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface Props {
  task: {
    id: number;
    name: string;
    work_description: string;
    work_distributor: string;
    assign_tasks: string;
    assign_date: string;
    submission_date: string;
  };
}

interface TaskForm {
  name: string;
  work_description: string;
  work_distributor: string;
  assign_tasks: string;
  assign_date: string;
  submission_date: string;
}

export default function Edit({ task }: Props) {
  const { data, setData, put, processing, errors } = useForm<TaskForm>({
    name: task.name,
    work_description: task.work_description,
    work_distributor: task.work_distributor ?? '',
    assign_tasks: task.assign_tasks ?? '',
    assign_date: task.assign_date ?? '',
    submission_date: task.submission_date ?? '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/tasks/${task.id}`);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Tasks', href: '/tasks' },
    { title: 'Edit Task', href: `/tasks/${task.id}/edit` },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="w-8/12 mx-auto py-6">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="work_description">Description</Label>
            <Input
              id="work_description"
              value={data.work_description}
              onChange={(e) => setData('work_description', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="work_distributor">Distributor</Label>
            <Input
              id="work_distributor"
              value={data.work_distributor}
              onChange={(e) => setData('work_distributor', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="assign_tasks">Assign Tasks</Label>
            <Input
              id="assign_tasks"
              value={data.assign_tasks}
              onChange={(e) => setData('assign_tasks', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="assign_date">Assign Date</Label>
            <Input
              id="assign_date"
              type="date"
              value={data.assign_date}
              onChange={(e) => setData('assign_date', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="submission_date">Submission Date</Label>
            <Input
              id="submission_date"
              type="date"
              value={data.submission_date}
              onChange={(e) => setData('submission_date', e.target.value)}
            />
          </div>

          <Button disabled={processing}>
            Update Task
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
