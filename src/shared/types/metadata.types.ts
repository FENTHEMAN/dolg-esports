import { Metadata, ResolvingMetadata } from "next";

export type GenerateMetadataFnProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export type GenerateMetadataFn = (
    props: GenerateMetadataFnProps,
    parent: ResolvingMetadata
) => Promise<Metadata>;
