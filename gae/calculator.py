import cgi

print("Content-type:text/html\r\n\r\n")

f = cgi.FieldStorage()

n1 = float(f.getvalue("n1", 0))
n2 = float(f.getvalue("n2", 0))
op = f.getvalue("op", "+")

if op == "+":
    r = n1 + n2
elif op == "-":
    r = n1 - n2
elif op == "*":
    r = n1 * n2
else:
    r = "Error" if n2 == 0 else n1 / n2

print("""
<form>
<input name=n1>
<input name=n2>

<select name=op>
<option>+</option>
<option>-</option>
<option>*</option>
<option>/</option>
</select>

<input type=submit>
</form>

<h3>Result = %s</h3>
""" % r)