type Data ={
field key,
field name,
option [],
rules []
}

type Option {
name
value

}

type Rule {
key,
value,
children []=> Type ? => Rule
}

compoenets --->contents
