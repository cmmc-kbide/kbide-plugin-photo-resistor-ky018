Blockly.JavaScript["photo_resistor_block"] = function(block) {
    var value_photo_resistor_pin = Blockly.JavaScript.valueToCode(
      block,
      "PHOTO_RESISTOR_PIN",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var variable_photo_resistor_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("PHOTO_RESISTOR_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	${variable_photo_resistor_value} = analogRead(${value_photo_resistor_pin});
    `;
    return code;
  };