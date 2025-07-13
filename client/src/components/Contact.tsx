
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  // EmailJS Configuration
  const SERVICE_ID = 'default_service'; // Replace with your EmailJS service ID
  const TEMPLATE_ID = 'template_25vjqyr';
  const PUBLIC_KEY = 'RL9oEgmI7zBZXm-uG';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Mudasar MD'
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully! ✨",
          description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at mudasarmd09@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mudasarmd09@gmail.com",
      description: "Enterprise projects & partnerships",
      color: "text-portfolio-blue",
      href: "mailto:mudasarmd09@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 312 4353320",
      description: "24/7 consultation available",
      color: "text-portfolio-purple",
      href: "tel:+923124353320"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Global Remote",
      description: "Available worldwide",
      color: "text-portfolio-cyan",
      href: "#"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "Fast project assessment",
      color: "text-success-green",
      href: "#"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Let's Work Together
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ready to transform your vision into a <span className="gradient-text font-semibold">market-leading digital solution</span>? 
            Let's discuss how we can <span className="text-portfolio-blue font-semibold">accelerate your business growth</span> with 
            cutting-edge technology and enterprise-grade architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Enhanced Contact Form */}
          <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/95 to-muted/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-portfolio-blue/10 transition-all duration-500 animate-slide-in-left pulse-glow">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                  <MessageSquare className="w-6 h-6 text-portfolio-blue" />
                </div>
                <CardTitle className="text-2xl gradient-text">
                  Send Direct Email
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Your message will be sent directly to my email inbox.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="from_name"
                      placeholder="Your Name"
                      required
                      value={formData.from_name}
                      onChange={handleInputChange}
                      className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300 h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="from_email"
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.from_email}
                      onChange={handleInputChange}
                      className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Project Subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300 h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe your project, timeline, and requirements..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-500 text-white font-semibold py-4 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-portfolio-blue/25 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Email...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Email
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/95 to-muted/20 backdrop-blur-sm hover:shadow-xl hover:shadow-portfolio-blue/10 transition-all duration-500 hover:scale-[1.02] animate-scale-in pulse-glow`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                          <IconComponent className="w-6 h-6 text-portfolio-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className={`font-medium ${info.color} mb-1`}>{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Availability Card */}
            <Card className="hover-glow border-portfolio-green/20 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
                    Available for Projects
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently accepting new projects and would love to work on your next innovative idea.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Full-Stack Development', 'Blockchain Solutions', 'AI Integration'].map((service) => (
                    <span 
                      key={service}
                      className="px-3 py-1 bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-400 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-glow border-portfolio-purple/20 bg-gradient-to-br from-background/80 to-muted/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 gradient-text">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "GitHub", url: "https://github.com/mudasarmd09", color: "hover:text-gray-800" },
                    { name: "LinkedIn", url: "https://linkedin.com/in/mudasar-md-6921b235a", color: "hover:text-blue-600" },
                    { name: "Email", url: "mailto:mudasarmd09@gmail.com", color: "hover:text-red-600" },
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-portfolio-blue/30 text-portfolio-blue hover:bg-portfolio-blue/10 hover:border-portfolio-blue/50 transition-all duration-300 hover:scale-105 ${social.color} animate-scale-in`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {social.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
