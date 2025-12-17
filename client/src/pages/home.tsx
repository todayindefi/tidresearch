import { ShieldCheck, Scale, TrendingUp, LayoutDashboard, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/abstract_deep_navy_institutional_background.png";

export default function Home() {
  const services = [
    {
      title: "Risk Analysis",
      description: "Asset risk analysis and due diligence to support DeFi projects and institutions.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    },
    {
      title: "Governance Services",
      description: "Professional DAO governance support including proposal tracking, analysis, and voting recommendations.",
      icon: <Scale className="h-8 w-8 text-primary" />,
    },
    {
      title: "Investment Analysis",
      description: "Valuation and growth-based analysis of DeFi sectors to identify category leaders and opportunities.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
    },
    {
      title: "Portfolio Tracking",
      description: "Custom dashboards and spreadsheets to help you monitor and manage your farming portfolio.",
      icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-xl font-bold tracking-tight text-foreground">
            TID <span className="text-primary">Research</span>
          </div>
          <a href="mailto:info@todayindefi.com">
            <Button variant="outline" className="border-primary/20 hover:border-primary/50 text-foreground hover:bg-primary/10">
              Contact
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Institutional Grade <br/>
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-200">
              DeFi Research
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            We provide comprehensive research, risk analysis, and governance support for DAOs, DeFi projects, and institutions.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <a href="mailto:info@todayindefi.com">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Services</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20 bg-card/30 mt-auto">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="font-serif text-2xl font-bold tracking-tight text-foreground mb-6">
            TID <span className="text-primary">Research</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@todayindefi.com" className="text-lg">info@todayindefi.com</a>
          </div>

          <p className="text-sm text-muted-foreground/50">
            &copy; {new Date().getFullYear()} TID Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
