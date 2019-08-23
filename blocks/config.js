module.exports = [
    {
        name: "photo_resistor_block",
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