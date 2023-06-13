import CardBase from "@/components/Cards/CardBase";

export default function PaginaProjeto () {
    return (
        <main className="h-fit bg-gray-500">
            <div className="flex justify-around p-2 mt-0 m-10"> 
                <CardBase/>
                <CardBase/>
                <CardBase/>
            </div>
            {props.texto}
        </main>
    )   
        
}