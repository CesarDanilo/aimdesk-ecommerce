import { Card, CardContent } from "./ui/card"
// import { Button } from "./ui/button"
import banner from "../assets/banner.webm"

export function SectionMainBanner() {
    return (
        <Card className="relative flex w-10/12 border-none shadow-none bg-transparent rounded-2xl overflow-hidden">
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

            {/* <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2">
                <Button variant="default" className="bg-black text-white text-2xl shadow-lg hover:bg-gray-900">
                    <h2>Saiba mais!</h2>
                </Button>
            </div> */}
        </Card >
    )
}
