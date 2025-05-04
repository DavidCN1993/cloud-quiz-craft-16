
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock, FileText, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { quizzes } from "@/data/quizData";
import FloatingIcons from "./FloatingIcons";

const Landing: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black opacity-70"></div>
        <FloatingIcons />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-quiz-dark leading-tight animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-quiz-dark via-quiz-dark to-quiz-primary">
                Become a DevOps Engineer
              </span>
            </h1>
            
            <p className="text-xl text-quiz-neutral mb-8 max-w-2xl animate-slide-up delay-100">
              Practice with real-world scenarios, track your progress, and boost your confidence to become a cloud/devops engineer in 2025.
            </p>
            
            <div className="mb-12 flex flex-col md:flex-row gap-4 animate-fade-in delay-200">
              <Link to="/quizzes">
                <Button 
                  size={isMobile ? "default" : "lg"} 
                  className="rounded-full px-8 bg-quiz-primary hover:bg-quiz-primary/90 hover:shadow-lg hover:shadow-quiz-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Browse Practice Tests
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/courses">
                <Button 
                  size={isMobile ? "default" : "lg"} 
                  className="rounded-full px-8 bg-quiz-accent hover:bg-quiz-accent/90 hover:shadow-lg hover:shadow-quiz-accent/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Browse Course Content
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full animate-slide-up delay-300">
              <FeatureCard 
                icon={FileText} 
                title="Realistic Questions" 
                description="Questions mirror the actual AWS exam format and difficulty." 
              />
              
              <FeatureCard 
                icon={Clock} 
                title="Timed Exams" 
                description="Build stamina with timed sessions that simulate real exam conditions." 
              />
              
              <FeatureCard 
                icon={CheckCircle} 
                title="Detailed Reviews" 
                description="Learn from your mistakes with comprehensive explanations." 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-quiz-primary to-blue-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Ace Your AWS Exam?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Start practicing today and build the confidence you need to pass your AWS Cloud Practitioner certification.
          </p>
          <Link to="/quiz/1">
            <Button size="lg" variant="secondary" className="rounded-full px-8 bg-white text-quiz-primary hover:bg-white/90 hover:shadow-lg">
              Start Free Practice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-quiz-primary/20 transition-all duration-300 h-full">
      <div className="bg-quiz-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-quiz-primary" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-left">{title}</h3>
      <p className="text-quiz-neutral text-sm text-left">{description}</p>
    </div>
  );
};

export default Landing;
