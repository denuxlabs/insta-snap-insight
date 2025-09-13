import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Zap, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "50K+", label: "Active Users" },
    { icon: <Award className="h-6 w-6" />, value: "1M+", label: "Accounts Analyzed" },
    { icon: <Zap className="h-6 w-6" />, value: "99.9%", label: "Uptime" },
    { icon: <Shield className="h-6 w-6" />, value: "100%", label: "Secure" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About InstalyticsPro
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering Instagram success through intelligent analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We believe that every Instagram account has the potential to reach new heights. 
                Our platform democratizes access to professional-grade analytics, making it easy 
                for creators, businesses, and agencies to understand their audience and optimize their content strategy.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p className="text-muted-foreground">
                Built by social media experts who understand the challenges of growing on Instagram, 
                our platform combines cutting-edge technology with intuitive design to deliver 
                insights that actually matter. We're not just another analytics tool – we're your 
                partner in Instagram success.
              </p>
            </div>
            
            <Card className="shadow-card gradient-subtle border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="gradient-instagram p-3 rounded-lg w-fit mx-auto mb-3">
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;