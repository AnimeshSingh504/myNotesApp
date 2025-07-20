    import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

    interface TooltipProps {
        children: React.ReactNode;
        content: React.ReactNode;
        side?: "top" | "right" | "bottom" | "left";
        sideOffset?: number;
    }

    const MyTooltip = ({content, children, side = 'bottom', sideOffset = 6}: TooltipProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} sideOffset={sideOffset}>
                {content}
            </TooltipContent>
        </Tooltip>
    )
    }

    export default MyTooltip