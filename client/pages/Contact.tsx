import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "RO Repair & Checkup",
    locality: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please provide your name and phone number");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request received! Our technician will call you shortly.");
  };

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            <Phone className="h-3.5 w-3.5 text-accent" />
            24x7 Customer Support
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            Contact &amp; Book Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an expert technician at your doorstep anywhere in Bengaluru within 60 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Cards */}
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">Direct Contact</h3>
              
              <div className="space-y-4 text-sm">
                <a
                  href="tel:+918088275348"
                  className="flex items-start gap-3 p-3 rounded-xl bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-primary">Call 24x7 Helpline</span>
                    <span className="text-base font-bold text-foreground">08088275348</span>
                    <span className="text-xs text-muted-foreground block">Instant technician dispatch</span>
                  </div>
                </a>

                <a
                  href="mailto:info@bookroservice.com"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-foreground">Email Support</span>
                    <span className="text-muted-foreground">info@bookroservice.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-foreground">Service Coverage</span>
                    <span className="text-muted-foreground">Bengaluru &amp; surrounding areas (all pin codes)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-foreground">Working Hours</span>
                    <span className="text-muted-foreground">Open 24 Hours / 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-primary/5 p-6 border-primary/20">
              <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Emergency Breakdown?
              </h4>
              <p className="text-xs text-muted-foreground mt-2">
                Experiencing sudden water overflow or motor burning smell? Disconnect the power plug immediately and call our direct dispatch line.
              </p>
              <a
                href="tel:+918088275348"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
              >
                Call Hotline Now &rarr;
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground">Book Doorstep Service</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6">
                Fill the details below and we will confirm your technician within 10 minutes.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Booking Request Submitted!</h4>
                  <p className="text-muted-foreground max-w-sm mx-auto text-sm">
                    Thank you, {formData.name}. Our technician will contact you on {formData.phone} shortly to coordinate arrival.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", service: "RO Repair & Checkup", locality: "", notes: "" });
                    }}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Service Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="RO Repair & Checkup">RO Repair &amp; Diagnostics</option>
                        <option value="Filter / Membrane Change">Filter &amp; Membrane Change</option>
                        <option value="Installation / Uninstallation">Installation / Relocation</option>
                        <option value="Annual Maintenance (AMC)">Annual Maintenance (AMC)</option>
                        <option value="Water Leakage / Noise">Water Leakage / Noise Issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Area / Locality in Bengaluru</label>
                      <input
                        type="text"
                        placeholder="e.g. Indiranagar, Koramangala"
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Issue Description (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the issue (e.g. water tastes strange, motor vibrating, RO brand Kent Grand)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow hover:bg-accent/90 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
