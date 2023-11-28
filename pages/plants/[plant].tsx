
import * as React from 'react';
import { Measurement, Plant, PlantLite } from '@/types/plants';
import PlantsApi from '@/lib/plants_api';
import { GetServerPropsResult } from "next";
import { Table, TableHead, TableContainer, TableCell, TableRow, TableBody, Paper } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';


type Props = {
    plant: Plant;
}
export async function getServerSideProps(context: any): Promise<GetServerPropsResult<Props>> {
    const plant = await PlantsApi.getById(context.params.plant);
    console.log(plant)
    return {
        props: {
            plant
        }
    }
};

export default function Home({ plant }: Props) {
    return (
        <main>
            <div>
                <h1>{plant['Latin name']}</h1>
                {plant.Img && <Image width={200} height={200} src={plant.Img} alt={plant['Latin name']} />}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 200 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Property</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={"CommonName"}   >
                                <TableCell >Common Name</TableCell>
                                <TableCell >{plant['Common name']}</TableCell>
                            </TableRow>
                            <TableRow key={"Family"}   >
                                <TableCell >Family</TableCell>
                                <TableCell >{plant.Family}</TableCell>
                            </TableRow>
                            <TableRow key={"Categories"}   >
                                <TableCell >Categories</TableCell>
                                <TableCell >{plant.Categories}</TableCell>
                            </TableRow>
                            <TableRow key={"URl"}   >
                                <TableCell >Url</TableCell>
                                <TableCell ><Link href={plant.Url} >{plant.Url}</Link></TableCell>
                            </TableRow>
                            <TableRow key={"Disease"}   >
                                <TableCell >Disease</TableCell>
                                <TableCell >{plant.Disease}</TableCell>
                            </TableRow><TableRow key={"Use"}   >
                                <TableCell >Use</TableCell>
                                <TableCell >{plant.Use}</TableCell>
                            </TableRow><TableRow key={"Insects"}   >
                                <TableCell >Insects</TableCell>
                                <TableCell >{plant.Insects}</TableCell>
                            </TableRow><TableRow key={"Avaibility"}   >
                                <TableCell >Avaibility</TableCell>
                                <TableCell >{plant.Avaibility}</TableCell>
                            </TableRow><TableRow key={"AvailableSizes"}   >
                                <TableCell >Available sizes (Pot)</TableCell>
                                <TableCell >{plant['Available sizes (Pot)']}</TableCell>
                            </TableRow>
                            <TableRow key={"Style"}   >
                                <TableCell >Style</TableCell>
                                <TableCell >{plant.Style}</TableCell>
                            </TableRow>  <TableRow key={"Bearing"}   >
                                <TableCell >Bearing</TableCell>
                                <TableCell >{plant.Bearing}</TableCell>
                            </TableRow>  <TableRow key={"Lighttolered"}   >
                                <TableCell >Light tolered</TableCell>
                                <TableCell >{plant['Light tolered']}</TableCell>
                            </TableRow>  <TableRow key={"Lightideal"}   >
                                <TableCell >Light ideal</TableCell>
                                <TableCell >{plant['Light ideal']}</TableCell>
                            </TableRow>
                            <TableRow key={"Height"}   >
                                <TableCell >Height at purchase</TableCell>
                                <TableCell ><MeasurementComp m={plant['Height at purchase']} /></TableCell>
                            </TableRow>  <TableRow key={"Width"}   >
                                <TableCell >Width at purchase</TableCell>
                                <TableCell ><MeasurementComp m={plant['Width at purchase']} />
                                </TableCell>
                            </TableRow>  <TableRow key={"Potential"}   >
                                <TableCell >Width potential</TableCell>
                                <TableCell ><MeasurementComp m={plant['Width potential']} /></TableCell>
                            </TableRow>
                            <TableRow key={"HeightPotential"}   >
                                <TableCell >Height potential</TableCell>
                                <TableCell ><MeasurementComp m={plant['Height potential']} /></TableCell>
                            </TableRow>
                            <TableRow key={"Appeal"}   >
                                <TableCell >Appeal</TableCell>
                                <TableCell >{plant.Appeal}</TableCell>
                            </TableRow>  <TableRow key={"Perfume"}   >
                                <TableCell >Perfume</TableCell>
                                <TableCell >{plant.Perfume}</TableCell>
                            </TableRow>  <TableRow key={"Growth"}   >
                                <TableCell >Growth</TableCell>
                                <TableCell >{plant.Growth}</TableCell>
                            </TableRow>  <TableRow key={"Pruning"}   >
                                <TableCell >Pruning</TableCell>
                                <TableCell >{plant.Pruning}</TableCell>
                            </TableRow>
                            <TableRow key={"Origin"}   >
                                <TableCell >Origin</TableCell>
                                <TableCell >{plant.Origin}</TableCell>
                            </TableRow>
                            {plant.Description && <TableRow key={"Description"}   >
                                <TableCell >Description</TableCell>
                                <TableCell >{plant.Description}</TableCell>
                            </TableRow>}
                            <TableRow key={"Blooming Season"}   >
                                <TableCell >Blooming Season</TableCell>
                                <TableCell >{plant['Blooming season']}</TableCell>
                            </TableRow><TableRow key={"Watering"}   >
                                <TableCell >Watering</TableCell>
                                <TableCell >{plant.Watering}</TableCell>
                            </TableRow><TableRow key={"ColorOfBloom"}   >
                                <TableCell >Color of Blooms</TableCell>
                                <TableCell >{plant['Color of blooms']}</TableCell>
                            </TableRow>
                            <TableRow key={"Potdiameter"}   >
                                <TableCell >Pot diameter</TableCell>
                                <TableCell ><MeasurementComp m={plant['Pot diameter (cm)']} /></TableCell>
                            </TableRow>
                            <TableRow key={"Climate"}   >
                                <TableCell >Climate</TableCell>
                                <TableCell >{plant.Climat}</TableCell>
                            </TableRow>
                            <TableRow key={"CommonName"}   >
                                <TableCell >Common Names</TableCell>
                                <TableCell >{plant['Common name']}</TableCell>
                            </TableRow>
                            <TableRow key={"Origin"}   >
                                <TableCell >Origin</TableCell>
                                <TableCell >{plant.Origin}</TableCell>
                            </TableRow>
                            <TableRow key={"ColorOfLeaf"}   >
                                <TableCell >Color of Leaf</TableCell>
                                <TableCell >{plant['Color of leaf']}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </main>);
}

const MeasurementComp = ({ m }: { m: Measurement }) => {
    return (
        <p>{`M: ${m.M}, CM: ${m.CM}`}</p>
    )
}