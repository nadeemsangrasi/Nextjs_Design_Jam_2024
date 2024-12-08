// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import Link from "next/link";

// const formSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   companyName: z.string().optional(),
//   country: z.string().min(1, "Please select a country"),
//   streetAddress: z.string().min(5, "Please enter a valid street address"),
//   townCity: z.string().min(2, "Please enter a valid town/city"),
//   province: z.string().min(1, "Please select a province"),
//   zipCode: z.string().min(5, "Please enter a valid ZIP code"),
//   phone: z.string().min(10, "Please enter a valid phone number"),
//   email: z.string().email("Please enter a valid email address"),
//   additionalInfo: z.string().optional(),
//   paymentMethod: z.enum(["directBank", "cashOnDelivery"]),
// });

// export default function BillingForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       paymentMethod: "directBank",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-8 lg:grid-cols-2">
//         <div>
//           <h2 className="mb-6 text-2xl font-bold">Billing details</h2>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>First Name</FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Last Name</FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="companyName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Company Name (Optional)</FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="country"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Country / Region</FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select country" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="srilanka">Sri Lanka</SelectItem>
//                         {/* Add more countries as needed */}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="streetAddress"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Street address</FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="townCity"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Town / City</FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="province"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Province</FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select province" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="western">
//                           Western Province
//                         </SelectItem>
//                         {/* Add more provinces as needed */}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="zipCode"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>ZIP code</FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Phone</FormLabel>
//                     <FormControl>
//                       <Input {...field} type="tel" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email address</FormLabel>
//                     <FormControl>
//                       <Input {...field} type="email" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="additionalInfo"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Additional information</FormLabel>
//                     <FormControl>
//                       <Textarea {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="space-y-4 rounded-lg border p-4">
//                 <FormField
//                   control={form.control}
//                   name="paymentMethod"
//                   render={({ field }) => (
//                     <FormItem className="space-y-4">
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="space-y-4"
//                         >
//                           <FormItem className="flex items-start space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="directBank" />
//                             </FormControl>
//                             <div className="space-y-1">
//                               <FormLabel className="font-normal">
//                                 Direct Bank Transfer
//                               </FormLabel>
//                               <p className="text-sm text-muted-foreground">
//                                 Make your payment directly into our bank
//                                 account. Please use your Order ID as the payment
//                                 reference.
//                               </p>
//                             </div>
//                           </FormItem>
//                           <FormItem className="flex items-start space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="cashOnDelivery" />
//                             </FormControl>
//                             <div className="space-y-1">
//                               <FormLabel className="font-normal">
//                                 Cash On Delivery
//                               </FormLabel>
//                             </div>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 Your personal data will be used to support your experience
//                 throughout this website, to manage access to your account, and
//                 for other purposes described in our{" "}
//                 <Link
//                   href="/privacy-policy"
//                   className="text-primary hover:underline"
//                 >
//                   privacy policy
//                 </Link>
//                 .
//               </div>

//               <Button type="submit" className="w-full">
//                 Place order
//               </Button>
//             </form>
//           </Form>
//         </div>

//         <div className="space-y-6">
//           <div className="rounded-lg border p-6">
//             <h3 className="mb-4 text-lg font-semibold">Product</h3>
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span>Asgaard sofa × 1</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between border-t pt-4">
//                 <span>Subtotal</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between border-t pt-4 font-semibold">
//                 <span>Total</span>
//                 <span className="text-primary">Rs. 250,000.00</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import BillingDetails from "./BillingDetails";
import FeatureSection from "@/components/shared/FeatureSection";

const CheckoutPage = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-screen flex-col overflow-hidden">
      <SectionHeader label="Checkout" url="/checkout" />
      <div className="mt-28">
        <BillingDetails />
        <div className="pb-8">
          <FeatureSection />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
