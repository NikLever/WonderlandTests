WL.registerComponent('RotateFan', {
    rotationSpeed: {type: WL.Type.Float, default: 10.0},
}, {
    init: function() {
        console.log('init() with rotationSpeed', this.rotationSpeed);
    },
    start: function() {
        console.log('start() with rotationSpeed', this.rotationSpeed);
    },
    update: function(dt) {
        //console.log('update() with delta time', dt);
        this.object.rotateAxisAngleDegObject([0, 1, 0], this.rotationSpeed*dt)
    },
});
