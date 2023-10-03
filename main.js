const { crawlPage } = require('./crawl')

function main() {
    if(process.argv.length < 3) {
        console.log("no website provided")
        process.exit(1)
    }
    
    if(process.argv.length > 3) {
        console.log("too many arguments")
        process.exit(1)
    }
    
    const baseURL = process.argv[2]

    console.log(`started crawl of ${baseURL}`)
    crawlPage(baseURL)
}

main()