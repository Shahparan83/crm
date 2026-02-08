import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types/navigation';
// UI Components from base library resources\js\components\base\input\input.tsx
import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

interface TaskForm {
  name: string;
  work_description: string;
  work_distributor: string;
  assign_tasks: string;
  assign_date: string;
  submission_date: string;
}
import { Button } from '@/components/ui/button';
export default function Create() {
  const { data, setData, post, processing, errors } =
    useForm<TaskForm>({
      name: '',
      work_description: '',
      work_distributor: '',
      assign_tasks: '',
      assign_date: '',
      submission_date: '',
    });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/tasks');
  };
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Create New Task',
      href: '/tasks/create',
    },
  ];
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className='w-8/12 mx-auto py-6'>
        <form onSubmit={submit}>
          <div className='gap-1.5'>
            <Label>Name:</Label>
            <Input
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              placeholder="Name"

            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
          <div className='gap-1.5'>
            <Label>Description:</Label>
            <Input
              value={data.work_description}
              onChange={e => setData('work_description', e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className='gap-1.5'>
            <Label>Distributor:</Label>
            <Input
              value={data.work_distributor}
              onChange={e => setData('work_distributor', e.target.value)}
              placeholder="Distributor"
            />
          </div>
          <div className='gap-1.5'>
            <Label>Assign Tasks:</Label>
            <Input
              value={data.assign_tasks}
              onChange={e => setData('assign_tasks', e.target.value)}
              placeholder="Assign Tasks"
            />
          </div>
          <div className='gap-1.5'>
            <Label>Assign Date:</Label>
            <Input
              type="date"
              value={data.assign_date}
              onChange={e => setData('assign_date', e.target.value)}
            />
          </div>
          <div className='gap-1.5'>
            <Label>Submission Date:</Label>
            <Input
              type="date"
              value={data.submission_date}
              onChange={e => setData('submission_date', e.target.value)}
            />
          </div>
          <Button disabled={processing}>Save</Button>
        </form>
      </div>
    </AppLayout>
  );
}
