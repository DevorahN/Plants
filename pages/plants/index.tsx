
import * as React from 'react';
import { Table, TableHead, TableContainer, TableCell, TableRow, TableBody } from '@mui/material';
import { PlantLite } from '@/types/plants';
import PlantsApi from '@/lib/plants_api';
import { GetServerPropsResult } from "next";
import { MenuItem, Select, TextField, Paper} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Link from 'next/link';


type Props = {
    plants: PlantLite[];
    categories: string[];
}
export async function getServerSideProps(): Promise<GetServerPropsResult<Props>> {
    let plants = await PlantsApi.getAll();

    //remove duplicates
    plants = Array.from(new Map(plants.map(item => [item["Latin name"], item])).values());

    //sort alphabetically
    plants = plants.sort((a, b) => a["Latin name"].localeCompare(b["Latin name"])).slice(0, 20)

    const categories = Array.from(new Set(plants.map(x => x.Categories)));

    return {
        props: {
            plants,
            categories
        }
    }
};

export default function Home({ plants, categories }: Props) {

    const [rows, setRows] = React.useState<PlantLite[]>(plants);
    const [category, setCategory] = React.useState<string>("All");

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
        if (event.target.value == "All") {
            console.log("All")
            setRows(plants)
        } else {
            const newRows = plants.filter(x => x.Categories == event.target.value);
            setRows(newRows);
        }
    };

    const handleSearch = (event: SelectChangeEvent) => {
        const searchTerm = (event.target.value as string).toUpperCase();
        const newRows = plants.filter(x => x["Latin name"].toUpperCase().startsWith(searchTerm) ||
            x.Family.toUpperCase().startsWith(searchTerm));
        setRows(newRows)
    };

    return (
        <main>
            <div>
                <Select
                    value={category}
                    label="Category"
                    onChange={handleCategoryChange}
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    {categories.map((cat) => (
                        <MenuItem value={cat}>{cat}</MenuItem>
                    ))}
                </Select>
                <TextField id="search" variant="outlined" label="Search" onChange={handleSearch} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Latin Name</TableCell>
                                <TableCell align="right">Family</TableCell>
                                <TableCell align="right">Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row["Latin name"]}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Link href={`/plants/${row.id}`}>{row["Latin name"]}</Link>
                                    </TableCell>
                                    <TableCell align="right">{row.Family}</TableCell>
                                    <TableCell align="right">{row.Categories}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </main>);
}