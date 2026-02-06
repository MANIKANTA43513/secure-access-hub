import { Task } from '@/hooks/useTasks';
import { Card, CardContent } from '@/components/ui/card';
import { ListTodo, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    highPriority: tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length,
  };

  const items = [
    {
      label: 'Total Tasks',
      value: stats.total,
      icon: ListTodo,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: 'Pending',
      value: stats.pending,
      icon: Clock,
      color: 'text-warning',
      bg: 'bg-warning/10',
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: AlertCircle,
      color: 'text-info',
      bg: 'bg-info/10',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: CheckCircle2,
      color: 'text-success',
      bg: 'bg-success/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <Card key={item.label} className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
