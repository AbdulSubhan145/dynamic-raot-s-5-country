export default function CountryName({params}:any) {

    //array's of object
    
        const countries:{
            name: string,
            population: number,
            capital: string,
        }[] = [{
            name: "pakistan",
            population: 251269164,
            capital: "islamabad"
        }, {
            name: "india",
            population: 33807000,
            capital: "delhi"
        },{
            name: "china",
            population: 1418153587,
            capital: "beijing"
        },{
            name: "brazil",
            population: 211998573 ,
            capital: "brasília"
        },{
            name: "indonasia",
            population: 282477584,
            capital: "jakarta"
        },
    ]
    
    
    function findcountry(country_url:string){
            return countries.find(country=> country.name.toLocaleLowerCase() == country_url.toLocaleLowerCase())
    }
    let result = findcountry(params.country_name)
    
    
    return (
        <div>
        {
            result ? (
            <>
                <h1 >Country Name : {result.name}</h1>
                <h1 >Country Population : {result.population}</h1>
                <h1 >Country Capital : {result.capital}</h1>
            </>
            ) : (
                <h2>Country Not Found</h2>
            )
        }
         
        </div>
        );
      }