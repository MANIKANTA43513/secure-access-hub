import { useState } from 'react';
import { Task } from '@/hooks/useTasks';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onUpdate: (task: Task, updates: Partial<Task>) => void;
  onDelete: (taskId: string) => void;
}

const statusConfig = {
  pending: {
    label: 'Pending',
    icon: Clock,
    variant: 'outline' as const,
    className: 'border-warning text-warning',
  },
  in_progress: {
    label: 'In Progress',
    icon: AlertCircle,
    variant: 'outline' as const,
    className: 'border-info text-info',
  },
  completed: {
    label: 'Completed',
    icon: CheckCircle2,
    variant: 'outline' as const,
    className: 'border-success text-success',
  },
};

const priorityConfig = {
  low: { label: 'Low', className: 'bg-muted text-muted-foreground' },
  medium: { label: 'Medium', className: 'bg-warning/20 text-warning' },
  high: { label: 'High', className: 'bg-destructive/20 text-destructive' },
};

export function TaskCard({ task, onUpdate, onDelete }: TaskCardProps) {
  const { isAdmin, user } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  
  const status = statusConfig[task.status];
  const priority = priorityConfig[task.priority];
  const StatusIcon = status.icon;
  
  const isOwner = user?.id === task.created_by;
  const canModify = isOwner || isAdmin;

  const handleStatusChange = (newStatus: string) => {
    onUpdate(task, { status: newStatus as Task['status'] });
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(task.id);
    setIsDeleting(false);
  };

  return (
    <div className="group p-4 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-foreground truncate">{task.title}</h3>
            <Badge className={priority.className} variant="secondary">
              {priority.label}
            </Badge>
          </div>
          
          {task.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              {task.description}
            </p>
          )}
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Created {format(new Date(task.created_at), 'MMM d, yyyy')}</span>
            {isAdmin && !isOwner && (
              <Badge variant="outline" className="text-[10px]">
                Admin View
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={task.status}
            onValueChange={handleStatusChange}
            disabled={!canModify}
          >
            <SelectTrigger className="w-[140px] h-9">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <StatusIcon className={`w-3.5 h-3.5 ${status.className.split(' ')[1]}`} />
                  <span className="text-sm">{status.label}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.entries(statusConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <Icon className={`w-3.5 h-3.5 ${config.className.split(' ')[1]}`} />
                      {config.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          {canModify && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Task</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete "{task.title}"? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="bg-destructive hover:bg-destructive/90"
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </div>
  );
}
