<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Jade Delight</title>
  </head>

  <body>
    <script language="javascript">
      function MenuItem(name, cost) {
        this.name = name;
        this.cost = cost;
      }

      menuItems = new Array(
        new MenuItem("Chicken Chop Suey", 4.5),
        new MenuItem("Sweet and Sour Pork", 6.25),
        new MenuItem("Shrimp Lo Mein", 5.25),
        new MenuItem("Moo Shi Chicken", 6.5),
        new MenuItem("Fried Rice", 2.35)
      );

      function makeSelect(name, minRange, maxRange) {
        var t = "";
        t = "<select name='" + name + "' size='1'>";
        for (j = minRange; j <= maxRange; j++)
          t += "<option>" + j + "</option>";
        t += "</select>";
        return t;
      }
    </script>

    <h1>Jade Delight</h1>
    <form onSubmit="return validate()">
      <p>First Name: <input type="text" name="fname" /></p>
      <p>Last Name*: <input type="text" name="lname" /></p>
      <p id="street">Street: <input type="text" name="street" /></p>
      <p id="city">City: <input type="text" name="city" /></p>
      <p>Phone*: <input type="text" name="phone" /></p>
      <p>
        <input
          type="radio"
          name="p_or_d"
          value="pickup"
          checked="checked"
        />Pickup
        <input type="radio" name="p_or_d" value="delivery" id="delivery" />
        Delivery
      </p>
      <table border="0" cellpadding="3">
        <tr>
          <th>Select Item</th>
          <th>Item Name</th>
          <th>Cost Each</th>
          <th>Total Cost</th>
        </tr>
        <script language="javascript">
          var s = "";
          for (i = 0; i < menuItems.length; i++) {
            s += "<tr><td>";
            s += makeSelect("quan" + i, 0, 10);
            s += "</td><td>" + menuItems[i].name + "</td>";
            s += "<td> $ " + menuItems[i].cost.toFixed(2) + "</td>";
            s += "<td>$<input type='text' name='cost'/></td></tr>";
          }
          document.writeln(s);
        </script>
      </table>
      <p>Subtotal: $<input type="text" name="subtotal" id="subtotal" /></p>
      <p>Mass tax 6.25%: $ <input type="text" name="tax" id="tax" /></p>
      <p>Total: $ <input type="text" name="total" id="total" /></p>

      <input type="submit" value="Submit Order" />
    </form>
    <div id="result">&nbsp;</div>
    <script src="jade_delight.js"></script>
  </body>
</html>