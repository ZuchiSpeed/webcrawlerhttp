const { crawlPage } = require('./crawl')

async function main() {
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
    const pages = await crawlPage(baseURL, baseURL, {})

    for(const page of Object.entries(pages)) {
        console.log(page)
    }
}

main()