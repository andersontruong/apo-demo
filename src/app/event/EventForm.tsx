"use client"
 
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format, startOfDay } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { TimePickerDemo } from "@/components/time-picker/time-picker-demo"
import { createDoc } from "@/lib/contentful/contentfulQuery"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
  

const formSchema = z.object({
    eventName: z.string().min(2, { message: "Event name must be at least 2 characters."}).max(100),
    startDate: z.date({
        required_error: "Starting date is required."
    }),
    endDate: z.date({
        required_error: "Ending date is required."
    })
})

export default function EventForm() {
    const [successDialogOpen, setSuccessDialogOpen] = React.useState<boolean>(false);
    const [date, setDate] = React.useState<Date>();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventName: "",
            startDate: startOfDay(new Date()),
            endDate: startOfDay(new Date())
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        createDoc('event', {
            type: {
                'en-US': 'fel/Fellowship',
            },
            title: {
                'en-US': values.eventName,
            },
            startDateTime: {
                'en-US': values.startDate,
            },
            endDateTime: {
                'en-US': values.endDate
            }
        })
        .then(()=> console.log(values))
        .catch(e => console.log(e));
        setSuccessDialogOpen(true);
    }
    
    return (
        <Form {...form}>
            <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
                <DialogContent className="sm:max-w-xs">
                    <DialogHeader className="items-center">
                    <DialogTitle>Requested Event!</DialogTitle>
                    <DialogDescription>
                        Your event is now waiting for review.
                    </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-center">
                        <DialogClose asChild>
                            <Button type="button" variant="destructive">
                            Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
                </Dialog>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                            <Input placeholder="KBBQ Fellowship" {...field} />
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Starting Date</FormLabel>
                    <Dialog>
                        <DialogTrigger asChild>
                            <FormControl>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[260px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                            >
                                {field.value ? (
                                    format(field.value, "PPPp")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl></DialogTrigger>
                        <DialogContent className="justify-center">
                            {/* <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                            </DialogHeader> */}
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date < startOfDay(new Date())
                                }
                                initialFocus
                            />
                            <div className="p-3 border-t border-border">
                                <TimePickerDemo setDate={field.onChange} date={field.value} />
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* <Popover>
                        <PopoverTrigger asChild>
                        
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            
                        </PopoverContent>
                    </Popover> */}
                    {/* <FormDescription>
                        Your date of birth is used to calculate your age.
                    </FormDescription> */}
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Ending Date</FormLabel>
                    <Dialog>
                        <DialogTrigger asChild>
                            <FormControl>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[260px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                            >
                                {field.value ? (
                                    format(field.value, "PPPp")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl></DialogTrigger>
                        <DialogContent className="justify-center">
                            {/* <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                            </DialogHeader> */}
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date < startOfDay(new Date())
                                }
                                initialFocus
                            />
                            <div className="p-3 border-t border-border">
                                <TimePickerDemo setDate={field.onChange} date={field.value} />
                            </div>
                        </DialogContent>
                    </Dialog>
                    {/* <FormDescription>
                        Your date of birth is used to calculate your age.
                    </FormDescription> */}
                    <FormMessage />
                    </FormItem>
                )}
            />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}