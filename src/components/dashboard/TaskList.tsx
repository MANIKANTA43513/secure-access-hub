import { Task } from '@/hooks/useTasks';
import { TaskCard } from './TaskCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ListTodo } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  onUpdate: (task: Task, updates: Partial<Task>) => void;
  onDelete: (taskId: string) => void;
}

export function TaskList({ tasks, isLoading, onUpdate, onDelete }: TaskListProps) {
  if (isLoading) {
    return (
      <Card className="border-border/50">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ListTodo className="w-5 h-5 text-primary" />
          Tasks
          <span className="text-muted-foreground font-normal">({tasks.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <ListTodo className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-1">No tasks yet</h3>
            <p className="text-muted-foreground">Create your first task to get started</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
