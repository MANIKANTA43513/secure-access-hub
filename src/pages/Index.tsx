import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Users, Database, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const features = [
    {
      icon: Lock,
      title: 'JWT Authentication',
      description: 'Secure token-based authentication with password hashing using bcrypt.',
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Admin and User roles with granular permissions and secure RLS policies.',
    },
    {
      icon: Database,
      title: 'CRUD Operations',
      description: 'Full Create, Read, Update, Delete functionality with input validation.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Row Level Security, prepared statements, and protected API endpoints.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary shadow-glow mb-8">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              TaskFlow RBAC
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              A secure, scalable backend system featuring JWT authentication, 
              Role-Based Access Control, and CRUD operations with a clean React frontend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base gap-2">
                <Link to="/auth">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="https://docs.lovable.dev/features/cloud" target="_blank" rel="noopener noreferrer">
                  View Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Core Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with security and scalability in mind, implementing industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Technology Stack</h2>
            <p className="text-muted-foreground">Modern tools for modern applications</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'JWT', 'Zod', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Secure Task Management System</p>
        </div>
      </footer>
    </div>
  );
}
