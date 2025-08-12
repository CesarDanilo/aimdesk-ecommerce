import { Card, CardContent } from "./ui/card"
import banner from "../assets/banner.webp"

export function SectionMainBanner() {
    return (
        <Card className="flex w-10/12 border-none shadow-none bg-transparent">
            <CardContent className="p-0">
                <img src={banner} alt="Banner" className="w-full" />
            </CardContent>
        </Card>
    )
}
