namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight4)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardLava0)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight4)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tiles.createTilemap(
            hex`0a000d0001020202020202020203050f08080808080808040508080808080808080405080808080808080804050808080808080808040508080808080808080409080808080808040404050808080808080400000505131313130400000000050812080804000000000508080a08040000000005080808080400000000070505050505000000`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . 2 2 2 
2 . . . . . . 2 2 2 
2 2 . . . . 2 2 2 2 
2 2 . . . . 2 2 2 2 
2 2 . . . . 2 2 2 2 
2 2 . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.floorLight4,sprites.dungeon.purpleOuterWest0,sprites.dungeon.chestClosed,sprites.dungeon.hazardSpike,sprites.dungeon.hazardWater,sprites.dungeon.buttonTealDepressed,sprites.dungeon.buttonOrange,sprites.dungeon.buttonOrangeDepressed,sprites.builtin.field1,sprites.dungeon.buttonTeal,sprites.builtin.field0,sprites.dungeon.hazardLava0],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f f f f f e e e e f . . . . 
. . . . f f e e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
