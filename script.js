async function testConnection() {
    const { data, error } = await supabase
        .from("transport_leads")
        .select("*");

    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Connected!");
        console.table(data);
    }
}

testConnection();
