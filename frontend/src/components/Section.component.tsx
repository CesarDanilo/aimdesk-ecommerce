import { Card, CardContent } from "./ui/card"
import banner from "../assets/banner.webm"

export function SectionMainBanner() {
    return (
        <Card className="flex w-10/12 border-none shadow-none bg-transparent ">
            <CardContent className="p-0">
                <video
                    className="w-full h-[500px] object-cover rounded-2xl"
                    src={banner}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </CardContent>
        </Card>
    )
}
