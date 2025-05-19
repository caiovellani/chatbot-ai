import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>CV</AvatarFallback>
              <AvatarImage src="https://github.com/caiovellani.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              officia optio dolore asperiores fugit, harum esse hic velit natus
              enim architecto placeat atque nam repudiandae in repellendus
              mollitia temporibus? Rem.
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>RS</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              officia optio dolore asperiores fugit, harum esse hic velit natus
              enim architecto placeat atque nam repudiandae in repellendus
              mollitia temporibus? Rem.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-y-2">
          <Input placeholder="How can i help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
