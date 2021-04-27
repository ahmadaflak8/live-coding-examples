import './Page.css';

const Page = () =>
{
    function handleClick(event)
    {
        console.log("Ich wurde angeklickt!");
    }

    return(
        <main className="Page">
            <p>
                Unser Inhalt...
            </p>

            {/* In JSX wird das C von onclick groß geschrieben */}
            <button onClick={ handleClick }>
                Sag etwas in der Konsole!
            </button>
        </main>
    )
}

export default Page;
