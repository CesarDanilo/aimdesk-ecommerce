import { Card, CardContent } from "./ui/card"
import banner from "../assets/banner.webp"
export function SectionMainBanner() {
    return (
        <Card className="flex w-10/12">
            <CardContent>
                <img src={banner} alt="" />
            </CardContent>
        </Card>
    )
}