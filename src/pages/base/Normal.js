
function testAttr(){

    const age_attr = 'age'

    const obj = {
        name : 'ciwei',
        [age_attr] : 32
    }

    console.log(obj.name, obj.age, obj.age_attr, obj[age_attr])

}

export default function App(){

    testAttr()

    return (
        <div>
            Normal
        </div>
    )

}