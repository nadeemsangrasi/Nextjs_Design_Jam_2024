"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone } from "lucide-react";
import img1 from "@/assets/icons/Vector (7).png";
import img2 from "@/assets/icons/Vector (6).png";
import img3 from "@/assets/icons/Vector (5).png";
import Image from "next/image";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container mx-auto px-4 py-28">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">
          Get In Touch With Us
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className=" p-3">
              <Image src={img1} alt="location image" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Address</h3>
              <p className="text-muted-foreground">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className=" p-3">
              <Image src={img2} alt="phone image" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Phone</h3>
              <p className="text-muted-foreground">Mobile: +(84) 546-6789</p>
              <p className="text-muted-foreground">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className=" p-3">
              <Image src={img3} alt="clock image" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Working Time</h3>
              <p className="text-muted-foreground">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="text-muted-foreground">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Abc"
                        {...field}
                        className="py-8 px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Abc@def.com"
                        {...field}
                        className="py-8 px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="This is an optional"
                        {...field}
                        className="py-8 px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hi! I'd like to ask about"
                        className="min-h-[120px] resize-none py-8 px-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className=" bg-transparent hover:bg-transparent text-black border border-black hover:border-black w-fit py-4 px-16 rounded-lg"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
