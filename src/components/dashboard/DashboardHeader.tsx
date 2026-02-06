import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Shield, Plus, LogOut, User, ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  onCreateTask: () => void;
}

export function DashboardHeader({ onCreateTask }: DashboardHeaderProps) {
  const { user, role, signOut, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-primary shadow-glow">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">TaskFlow</h1>
            <p className="text-xs text-muted-foreground">RBAC System</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button onClick={onCreateTask} size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Task
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium">{user?.email?.split('@')[0]}</p>
                  <div className="flex items-center gap-1">
                    <Badge
                      variant={isAdmin ? 'default' : 'secondary'}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {role || 'user'}
                    </Badge>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div>
                  <p className="font-medium">{user?.email}</p>
                  <p className="text-xs text-muted-foreground capitalize">Role: {role}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut} className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
