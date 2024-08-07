var template = require("../template.js");


async function rudeText(req, res) {


    let configgers = {
        "text": req.query.text || "Default text!!!",
        "text_color": req.query.text_color || "FFFFFF",
        "animation": req.query.animation || "fall",
        "delay": req.query.delay || 0,
        "font": req.query.font || "Segoe UI",
        "font_size": req.query.font_size || 16,
        "anchor": req.query.anchor || "start",
        "dominant_baseline": req.query.dominant_baseline || "middle",
        "iteration_count": req.query.iteration_count || -1,
        "duration": req.query.duration || 0.5,
    }

    configgers["width"] = req.query.width || configgers.font_size*(configgers.text.length+2)/2;
    configgers["height"] = req.query.height || configgers.font_size*1.5;

    let anims_repeating = ["rainbow", "wave"]
    let anims_onetime = ["fall"]


    let anims = anims_repeating.concat(anims_onetime);

    if (!anims.includes(configgers["animation"]))
    {
        configgers["animation"] = "fall";
    }

    let anim_repeats = anims_repeating.includes(configgers["animation"]);

    if (configgers["iteration_count"] == -1) {
        configgers["iteration_count"] = anim_repeats ? "infinite" : 1;
    }

    let resp = template(configgers);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(resp);

}

module.exports = rudeText;
