import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTasks, Task } from '@/hooks/useTasks';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { TaskStats } from '@/components/dashboard/TaskStats';
import { TaskList } from '@/components/dashboard/TaskList';
import { CreateTaskDialog } from '@/components/dashboard/CreateTaskDialog';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const { tasks, isLoading: tasksLoading, createTask, updateTask, deleteTask } = useTasks();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleCreateTask = async (data: { title: string; description?: string; priority?: 'low' | 'medium' | 'high' }) => {
    await createTask.mutateAsync(data);
    setIsCreateOpen(false);
  };

  const handleUpdateTask = async (task: Task, updates: Partial<Task>) => {
    await updateTask.mutateAsync({ id: task.id, ...updates });
  };

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask.mutateAsync(taskId);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader onCreateTask={() => setIsCreateOpen(true)} />
      
      <main className="container py-8">
        <div className="animate-slide-up">
          <TaskStats tasks={tasks} />
        </div>

        <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <TaskList
            tasks={tasks}
            isLoading={tasksLoading}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </main>

      <CreateTaskDialog
        open={isCreateOpen}
        onOpenChange={setIsCreateOpen}
        onSubmit={handleCreateTask}
        isLoading={createTask.isPending}
      />
    </div>
  );
}
