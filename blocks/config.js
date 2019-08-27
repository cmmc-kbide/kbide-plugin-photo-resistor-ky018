module.exports = [
    {
        name: "KY-018 PHOTORESISTOR MODULE",
        blocks: [
            {
                xml:
                    `<block type="photo_resistor_block">
                        <value name="PHOTO_RESISTOR_PIN">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
        ]
    }
];