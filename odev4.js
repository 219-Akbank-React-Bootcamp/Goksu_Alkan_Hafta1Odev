/** 
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde 
 * doğru eşleştirme yapılarak
 * oluşturulmalı. 
 */


const input = {
    "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    "data": [
        ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", "28/06/2022", "Eritrea", "Lyubertsy"],
        ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", "24/03/2021", "British Indian Ocean Territory", "Colwood"]]
}
const output = input.data.map(array => {
    const obj = {}
    array.forEach((element, index) => {
        obj[input.cols[index]] = element
    })
    return obj
})
console.log(output)

const sampleoutput = [
    {
        "Name Surname": "Hyacinth Vincent",
        "Company": "Duis Corporation",
        "Email": "iaculis.enim@magnaCrasconvallis.ca",
        "Date": "28/06/2022",
        "Country": "Eritrea",
        "City": "Lyubertsy"
    },
    {
        "Name Surname": "Brenden Martinez",
        "Company": "olutpat Nunc Associates",
        "Email": "iaculis@estMauris.org",
        "Date": "24/03/2021",
        "Country": "British Indian Ocean Territory",
        "City": "Colwood"
    }
]