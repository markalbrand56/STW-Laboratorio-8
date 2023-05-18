import Geralt from "./skins/Geralt.png"
import Ciri from "./skins/Ciri.png"
import Yennefer from "./skins/Yennefer.png"

import Ghoul from "./themes/theme1/Ghoul.png"
import Leshy from "./themes/theme2/Leshy.png"

import Trail1 from "./themes/theme1/draws-floor-svgrepo-com (1).svg"
import Trail2 from "./themes/theme2/Trail.png"

import Column1 from "./themes/theme1/brick1.png"
import Column2 from "./themes/theme2/brick-wall-svgrepo-com.svg"

import HorizontalWall1 from "./themes/theme1/brick4.png"
import HorizontalWall2 from "./themes/theme2/brick-wall-svgrepo-com (1).svg"

import VerticalWall1 from "./themes/theme1/brick2.png"
import VerticalWall2 from "./themes/theme2/brick-wall-svgrepo-com (2).svg"

import Background1 from "./Geralt bc.png"
import Background2 from "./Ciri BC.png"

const illustrations = {
    player: {
        default: Geralt,
        var1: Ciri,
        var2: Yennefer,
    },
    goal: {
        Theme1: Ghoul,
        Theme2: Leshy,
    },
    column: {
        Theme1: Column1,
        Theme2: Column2,
    },
    trail: {
        Theme1: Trail1,
        Theme2: Trail2,
    },
    horizontalWall: {
        Theme1: HorizontalWall1,
        Theme2: HorizontalWall2,
    },
    verticalWall: {
        Theme1: VerticalWall1,
        Theme2: VerticalWall2,
    },
    backgrounds: {
        background1: Background1,
        background2: Background2,
    },
}

export default illustrations
