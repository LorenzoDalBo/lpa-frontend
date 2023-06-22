export default function Modal ({isOpen}) {

    if (isOpen) {
        return (
            <div className="bg-fixed">
                <div className="text-greensatc mb-0 ml-0 mr-0 z-50 h-96">
                   Modal Teste
                </div>
            </div>            
        ) 
    }

    return null
}


  
