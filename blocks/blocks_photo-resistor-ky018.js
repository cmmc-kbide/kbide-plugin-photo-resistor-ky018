Blockly.Blocks["photo_resistor_block"] = {
    init: function() {
      this.appendDummyInput().appendField("PHOTO RESISTOR");
      this.appendValueInput("PHOTO_RESISTOR_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("PHOTO_RESISTOR_VALUE"),
          "PHOTO_RESISTOR_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };