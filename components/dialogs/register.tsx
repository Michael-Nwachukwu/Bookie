import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {/* <Button className="px-4 py-1 rounded-2xl bg-indigo-800">Book now</Button> */}
                <button className="px-4 py-1 rounded-2xl bg-indigo-800">Book now</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="text-white space-y-2">
                    <DialogTitle>Provide Email</DialogTitle>
                    <DialogDescription className="text-gray-300/70 font-light">
                        Just before you start, we need to grab your email real quick!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 text-white">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="Awesomeplanner@something.com"
                            className="col-span-3 bg-transparent border-[#44444b] placeholder:text-[#44444b] placeholder:text-xs"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="bg-white text-black hover:bg-indigo-800 hover:text-white">Let's Go</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
